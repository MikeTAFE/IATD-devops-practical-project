resource "github_repository" "demo_repo" {
  name = "iatd-terraform-demo-repo"
  description = "Demo GitHub repo created with Terraform"
  visibility = "public"
}