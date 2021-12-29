import axios from 'axios'

export default async (req, res) => {
  try {
    const { data } = await axios.get(`https://rest.bandsintown.com/artists/Glasslands/events/?app_id=${process.env.BANDS_IN_TOWN_KEY}`)
    res.json({ success: true, data })
  } catch (error) {
    console.error(error)
    res.json({ success: false })
  }
}
