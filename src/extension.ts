import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('SongPro extension is now active');

    // Register your commands here
    // Example:
    // let disposable = vscode.commands.registerCommand('songpro.exampleCommand', () => {
    //     vscode.window.showInformationMessage('Hello from SongPro!');
    // });
    // context.subscriptions.push(disposable);
}

export function deactivate() {}
