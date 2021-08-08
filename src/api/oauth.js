import { post } from 'axios'

const CLIENT_ID = '80860d18ddf64b9b9572ed0ae3ae74a1'
const CLIENT_SECRET = 'SilpQRQ7MAw99yVP6faZtpKX6ouuNeFd'

const REGION = 'eu'
const API_URL = `https://${REGION}.battle.net/oauth/token`

function getToken() {
  const BODY = new FormData()
  BODY.append('grant_type', 'client_credentials')

  const CONFIG = {
    headers: { 'Content-Type': 'multipart/form-data' },
    auth: { username: CLIENT_ID, password: CLIENT_SECRET }
  }

  // Hacemos una peticion POST
  return post(API_URL, BODY, CONFIG)
}

export { getToken }
