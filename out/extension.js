"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "hwo" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World!');
    });
    context.subscriptions.push(disposable);
    let asdasd = vscode.commands.registerCommand('extension.bla', () => {
        // The code you place here will be executed every time your command is executed
        var _a, _b;
        // Display a message box to the user
        vscode.window.showInformationMessage('bla!');
        let frontPosition = new vscode.Position(0, 0);
        let line_one_text = (_a = vscode.window.activeTextEditor) === null || _a === void 0 ? void 0 : _a.document.lineAt(0).text;
        // console.log(vscode.window.activeTextEditor?.document.save());
        // let length_of_first_line = vscode.window.activeTextEditor?.document.lineAt(0).text.length;
        // if (length_of_first_line !== undefined) {
        // 	let backPosition =  new vscode.Position(0, length_of_first_line);
        // 	console.log(vscode.window.activeTextEditor?.selection);
        // 	vscode.window.activeTextEditor?.edit(editBuilder => {
        // 		editBuilder.insert(backPosition, ").");
        // 	});
        // }
        (_b = vscode.window.activeTextEditor) === null || _b === void 0 ? void 0 : _b.edit(editBuilder => {
            if (line_one_text !== undefined) {
                let backPosition = new vscode.Position(0, line_one_text.length);
                editBuilder.delete(new vscode.Range(frontPosition, backPosition));
                editBuilder.insert(frontPosition, "-module(" + line_one_text + ").");
            }
            // editBuilder.replace(frontPosition, "-module(" + line_one_text + ").");
        });
    });
    context.subscriptions.push(asdasd);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map