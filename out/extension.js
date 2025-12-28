"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
function activate(context) {
    console.log('SongPro extension is now active');
    // Register your commands here
    // Example:
    // let disposable = vscode.commands.registerCommand('songpro.exampleCommand', () => {
    //     vscode.window.showInformationMessage('Hello from SongPro!');
    // });
    // context.subscriptions.push(disposable);
}
function deactivate() { }
//# sourceMappingURL=extension.js.map