abstract class Department {
  static fiscalYear = 2022;
  // private readonly id: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
  }

  static createEmployee(name: string) {
    return {
      name: name,
    };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT Department", this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("No value");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log("abs");
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Max");
// console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("id", ["Max"]);

it.addEmployee("Max");
it.addEmployee("Mas");

it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();

// console.log(it);

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting);
console.log(accounting2);

// const accounting = new AccountingDepartment("id2", []);

// accounting.mostRecentReport = "Year End Report";
// accounting.addReport("wrong...");
// console.log(accounting.mostRecentReport);

// accounting.addEmployee("Max");
// accounting.addEmployee("Manu");
// accounting.printReports();
// accounting.printEmployeeInformation();

// console.log(accounting);
