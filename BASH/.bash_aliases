# alert for long running commands
alias alert='notify-send --urgency=low -i "$([ $? = 0 ] && echo terminal || echo error)" "$(history|tail -n1|sed -e '\''s/^\s*[0-9]\+\s*//;s/[;&|]\s*alert$//'\'')"'

# misc
alias mkdir='mkdir -p'
alias cls='clear'
alias da='date "+%Y-%m-%d %A %T %Z"'

# navigation
alias home='cd ~'
alias bd='cd "$OLDPWD"'
alias ..='cd ..'
alias ...='cd ../..'
alias ....='cd ../../..'
alias .....='cd ../../../..'

# ls and tree
alias ls='ls -XBhF --color=auto'
alias ll='ls -lXBhF --color=auto'
alias lf="ls -la | egrep -v '^d'" # files only
alias ldir="ls -la | egrep '^d'" # directories only
alias tree='tree -CAhF --dirsfirst'
alias treed='tree -CAFd'

# search through files, history or ps
alias h="history | grep "
alias p="ps aux | grep "
alias topcpu="/bin/ps -eo pcpu,pid,user,args | sort -k 1 -r | head -10"
alias f="find . | grep "
alias countfiles="for t in files links directories; do echo \`find . -type \${t:0:1} | wc -l\` \$t; done 2> /dev/null"
alias openports='netstat -nape --inet'

# Alias's for safe and forced reboots
alias rebootsafe='sudo shutdown -r now'
alias rebootforce='sudo shutdown -r -n now'

# Alias's to show disk space and space used in a folder
alias diskspace="du -S | sort -n -r |more"
alias folders='du -h --max-depth=1'
alias folderssort='find . -maxdepth 1 -type d -print0 | xargs -0 du -sk | sort -rn'
alias mountedinfo='df -hT'
