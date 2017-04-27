// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
'use strict';
var vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    var gitDiffer = vscode.commands.registerCommand('extension.gitDiffer', function (param) {
        
        if (param == undefined ||param._resourceUri.scheme !== 'file' ) {
            vscode.window.showWarningMessage('Command should be run from source control context menu');
            return;
        } else {
            var simpleGit = require('simple-git');
            var projectPath = (vscode.workspace.rootPath)
            var targetFile=param._resourceUri.fsPath.replace(projectPath,'');
            // remove first / or \
            if(targetFile[0]=== '/' || targetFile[0]=='\\'){
                targetFile=targetFile.slice(1,targetFile.length );
            }
            simpleGit(projectPath).raw(
                [
                    'difftool',
                    '-y',
                    targetFile
                ], (err, result) => {
                    if(err)
                        vscode.showWarningMessage(err)
                    console.log(err);
                    console.log(result);
                   

                });

        }

    });
    context.subscriptions.push(gitDiffer);

}

exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}
exports.deactivate = deactivate;