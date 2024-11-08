import { subscribe } from "diagnostics_channel";
import * as vscode from "vscode";

const getDaysLeft = () => {
  const today = new Date();
  const febSecond = new Date(today.getFullYear() + 1, 1, 2);
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.ceil((febSecond.getTime() - today.getTime()) / oneDay);
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
