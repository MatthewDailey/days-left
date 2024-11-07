// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // Register a new command that calculates the days left in the year
  const daysLeftCommand = vscode.commands.registerCommand(
    "days-left.calculateDaysLeft",
    () => {
      const today = new Date();
      const febSecond = new Date(today.getFullYear() + 1, 1, 2);
      const oneDay = 1000 * 60 * 60 * 24;
      const daysLeft = Math.ceil(
        (febSecond.getTime() - today.getTime()) / oneDay
      );

      vscode.window.showInformationMessage(`${daysLeft} days left of leave.`);
    }
  );

  context.subscriptions.push(daysLeftCommand);
}

// This method is called when your extension is deactivated
export function deactivate() {}
