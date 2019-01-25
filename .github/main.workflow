workflow "Zeit Cleanup" {
  on = "push"
  resolves = ["GitHub Action for Zeit"]
}

action "maddox/actions/sleep@master" {
  uses = "maddox/actions/sleep@master"
  args = "120"
}

action "GitHub Action for Zeit" {
  uses = "actions/zeit-now@9fe84d557939d277e0d98318b625bd48d364a89b"
  needs = ["maddox/actions/sleep@master"]
  secrets = ["ZEIT_TOKEN"]
  args = "rm luxfactor --safe"
}
