//challenge

interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: string;

  upgradeRam(ramValue: number): number;
}

const newComputer: Computer = {
  id: 3,
  brand: "Dell",
  ram: 32,
  upgradeRam(ramValue) {
    this.ram = this.ram + ramValue;
    return this.ram;
  },
};

console.log("New computer ram is:" + newComputer.ram);
newComputer.upgradeRam(8);

console.log("New computer ram is:" + newComputer.ram);
