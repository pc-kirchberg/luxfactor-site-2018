workflow "New workflow" {
  on = "push"
  resolves = [
    "Slack message",
  ]
}

action "./builder" {
  uses = "./builder"
}

action "Slack message" {
  uses = "Ilshidur/action-slack@36bb029ce9b69ef9c14fa6e1ef96c5634688b2ab"
  needs = ["./builder"]
  secrets = ["SLACK_WEBHOOK"]
  args = "Site successfully deployed!"
}
