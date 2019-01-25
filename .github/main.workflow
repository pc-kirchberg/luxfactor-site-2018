workflow "New workflow" {
  on = "push"
  resolves = ["GitHub Action for Slack"]
}

action "GitHub Action for npm" {
  uses = "actions/npm@de7a3705a9510ee12702e124482fad6af249991b"
  args = "install"
}

action "GitHub Action for npm-1" {
  uses = "actions/npm@de7a3705a9510ee12702e124482fad6af249991b"
  needs = ["GitHub Action for npm"]
  args = "deploy"
}

action "GitHub Action for Slack" {
  uses = "Ilshidur/action-slack@36bb029ce9b69ef9c14fa6e1ef96c5634688b2ab"
  needs = ["GitHub Action for npm-1"]
  secrets = ["SLACK_WEBHOOK"]
  args = "Luxfactor site has been deployed successfully."
}
