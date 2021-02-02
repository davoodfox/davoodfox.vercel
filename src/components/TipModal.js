import { useState } from "react";
import { Button, Modal, Input } from "antd";
import { useMachine } from "@xstate/react";
import tipMachine from "../machines/tipMachine";

function TipModal({ info }) {
  var { name, value } = info;
  var [tip, setTip] = useState(null);
  var [percent, setPercent] = useState(null);
  var [state, send] = useMachine(tipMachine);

  return (
    <>
      <h1>{state.matches("final") && `$${tip} sended to ${name}`}</h1>
      <Button
        type="primary"
        onClick={() => {
          send("OPEN");
        }}
      >
        Open Modal
      </Button>
      <Modal
        title="Options"
        visible={state.matches("options")}
        okText="Continue"
        onOk={() => {
          console.log(tip);
          if (tip) {
            send("CONTINUE");
          } else {
            return;
          }
        }}
        onCancel={() => {
          send("CLOSE");
        }}
      >
        <h3>Product is ${value}</h3>
        <h1>Tip for {name}</h1>
        <Button
          type={percent == 5 && "primary"}
          onClick={() => {
            setTip((value * 5) / 100);
            setPercent(5);
          }}
        >
          5%
        </Button>
        <Button
          type={percent == 10 && "primary"}
          onClick={() => {
            setTip((value * 10) / 100);
            setPercent(10);
          }}
        >
          10%
        </Button>
        <Button
          type={percent == 15 && "primary"}
          onClick={() => {
            setTip((value * 15) / 100);
            setPercent(15);
          }}
        >
          15%
        </Button>
        <Button
          type={percent == 20 && "primary"}
          onClick={() => {
            setTip((value * 20) / 100);
            setPercent(20);
          }}
        >
          20%
        </Button>
        <Input
          addonBefore="$"
          type="number"
          placeholder="custom value"
          onFocus={() => {
            setPercent(null);
          }}
          onChange={(e) => {
            setTip(e.target.value);
          }}
        />
      </Modal>
      <Modal
        title="Details"
        visible={state.matches("details")}
        okText="Confirm"
        onOk={() => {
          send("CONTINUE");
        }}
        onCancel={() => {
          send("CLOSE");
        }}
      >
        <h1>Tip for {name}</h1>
        <h3>${tip}</h3>
      </Modal>
    </>
  );
}

export default TipModal;
