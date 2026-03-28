import { MongoClient } from "mongodb"

declare global {
  var __mongoClientPromise__: Promise<MongoClient> | undefined
}

function getMongoUri() {
  const uri = process.env.MONGODB_URI

  if (!uri) {
    throw new Error("Missing MONGODB_URI")
  }

  return uri
}

export function getMongoClient() {
  if (!global.__mongoClientPromise__) {
    const client = new MongoClient(getMongoUri())
    global.__mongoClientPromise__ = client.connect()
  }

  return global.__mongoClientPromise__
}

export async function getMongoDb() {
  const dbName = process.env.MONGODB_DB_NAME

  if (!dbName) {
    throw new Error("Missing MONGODB_DB_NAME")
  }

  const client = await getMongoClient()
  return client.db(dbName)
}
