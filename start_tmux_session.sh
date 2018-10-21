SESSION_NAME="dev"
WINDOW_NAME=$(basename $PWD)
WORKING_DIR="$PWD"

tmux new-session -d -s $SESSION_NAME
tmux rename-window $WINDOW_NAME
tmux send-keys "yarn start" C-m

tmux split-window -h -t {left}

tmux split-window -v -t {bottom}
tmux send-keys "yarn test --watch" C-m

tmux select-pane -t {right}

tmux attach -t $SESSION_NAME
