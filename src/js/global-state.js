class GlobalState {
  wheelStage = 1;

  get wheelStage() {
    return this.wheelStage;
  }

  set wheelStage(value) {
    this.wheelStage = value;
  }
}

export const globalState = new GlobalState();
