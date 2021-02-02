import { Machine } from "xstate";

const tipMachine = Machine({
  context: {
    amount: null,
  },
  id: "tip",
  initial: "idle",
  states: {
    idle: {
      on: {
        OPEN: {
          target: "options",
        },
      },
    },
    options: {
      on: {
        CONTINUE: {
          target: "details",
        },
        CLOSE: {
          target: "idle",
        },
      },
    },
    details: {
      on: {
        CONTINUE: {
          target: "final",
        },
        BACK: {
          target: "options",
        },
        CLOSE: {
          target: "idle",
        },
      },
    },
    final: {},
  },
});

export default tipMachine;
