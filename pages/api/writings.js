async function getRepositoryIssues() {
  const raw = await fetch(
    "https://api.github.com/repos/edaegonis/edaegonis/issues",
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_PERSONAL_TOKEN}`,
      },
    }
  )

  const issues = await raw.json()

  return issues
}

export default async (req, res) => {
  try {
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")

    const issues = await getRepositoryIssues()

    res.end(JSON.stringify({ writings: issues }))
  } catch (e) {
    res.statusCode = 500
    res.end(JSON.stringify({ writings: [] }))
  }
}
