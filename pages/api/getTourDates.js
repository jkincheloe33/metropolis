import axios from 'axios'

export default async (req, res) => {
  // https://rest.bandsintown.com/artists/Justin%20Bieber/?app_id=write_here_your_app-id
  try {
    const { data } = await axios.get('https://dog.ceo/api/breeds/list/all')
    res.json({ success: true, data })
  } catch (error) {
    console.error(error)
    res.json({ success: false })
  }
}
