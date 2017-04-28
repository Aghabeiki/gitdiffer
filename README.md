# Gitdiffer

Visual Studio Code extension for running git difftool and git mergetools to resolve merge conflict.


### Some tips:
* I tried to use an other [extention](https://github.com/narekmal/vscode-run-git-difftool) but it didn't work for me, so I created my own . 
* just tested on Arch Linux.
* for running git difftools, use source control toolbox in vscode, right click on file and select "Launch Difftool for ..." 
* for running git mergetool, use sorce control toolbox in vscode, beside the title menu (...), select the "Launch Mergetool" or simple open the command plate and run "Launch Mergetool" 

### Installation Steps : 
* First install [diffmerge](https://sourcegear.com/diffmerge/).
* Add this configuration to your git global config :

    ```
    git config --global  diff.tool diffmerge
    git config --global difftool.diffmerge.cmd diffmerge "$LOCAL" "$REMOTE"
    git config --global merge.tool diffmerge
    git config --global mergetool.diffmerge.cmd diffmerge --merge --result="$MERGED" "$LOCAL" "$(if test -f "$BASE"; then echo "$BASE"; else echo "$LOCAL"; fi)" "$REMOTE"
    git config --global mergetool.diffmerge.trustexitcode true
    ```

* install the extention.

###### Final note:
* This extention should work with other [diffmerge](https://sourcegear.com/diffmerge/) tools.
* git configurations depends on the used tools. 

[Bug Reports](https://github.com/RaianRaika/gitdiffer/issues)<br>
[Repo](https://github.com/RaianRaika/gitdiffer)