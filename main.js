const LinkRedeSocial = {
  github: 'filipeleaogomes',
  instagram: 'filipe_leao_90',
  youtube: 'maykbrito',
  twitter: 'FilipeLeaoGomes',
  facebook: 'filipe.sisenando'
}
function ChangeSocialMediaLink() {
  for (let li of SocialLink.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinkRedeSocial[social]}`
  }
}
ChangeSocialMediaLink()

function GetGitHubUserInfo() {
  const url = `https://api.github.com/users/${LinkRedeSocial.github}`

  fetch(url)
    .then(Response => Response.json())
    .then(data => {
      UserName.textContent = data.name
      UserBio.textContent = data.bio
      UserLink.href = data.html_url
      UserImg.src = data.avatar_url
    })
}
GetGitHubUserInfo()
