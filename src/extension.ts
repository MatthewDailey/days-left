import { subscribe } from "diagnostics_channel";
import * as vscode from "vscode";

const getDaysLeft = () => {
  const today = new Date();
  const targetDate = new Date(today.getFullYear(), 0, 19); // Jan 19 of current year
  
  // If we're past Jan 19 this year, look to next year
  if (today > targetDate) {
    targetDate.setFullYear(today.getFullYear() + 1);
  }
  
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.ceil((targetDate.getTime() - today.getTime()) / oneDay);
};

export function activate(context: vscode.ExtensionContext) {
  const statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );
  statusBarItem.text = `${getDaysLeft()} days`;
  statusBarItem.show();

  context.subscriptions.push(statusBarItem);
}

export function deactivate() {}