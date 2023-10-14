if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

if (document.getElementById('my-resume-link')) {
  document.getElementById('my-resume-link').addEventListener('click', () => {
    document.getElementById('resume').scrollIntoView({behavior: "smooth"})
  })
}