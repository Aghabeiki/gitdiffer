# Gitdiffer
Visual Studio Code extension for running git difftool through context menu

### Some tips:
* I tried to use an other [extention](https://github.com/narekmal/vscode-run-git-difftool) but it didn't work for me, so I created my own . 
* just tested on Arch Linux.

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
* This extention should work with other [diffmerge](https://sourcegear.com/diffmerge/) tools. git configurations depends on the used tools. 

