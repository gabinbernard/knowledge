# enhance history
HISTTIMEFORMAT="%F %T "
HISTCONTROL=ignoredups
HISTSIZE=1000
HISTFILESIZE=5000

# Causes bash to append to history instead of overwriting it so if you start a new terminal, you have old session history
shopt -s histappend
PROMPT_COMMAND='history -a'

# Ignore case on auto-completion
if [[ $iatest > 0 ]]; then bind "set completion-ignore-case on"; fi
# Show auto-completion list automatically, without double tab
if [[ $iatest > 0 ]]; then bind "set show-all-if-ambiguous On"; fi

# Use vim commands in cli
set -o vi
export LS_COLORS="di=1;31:*=1;33"

eval "$(starship init bash)"
