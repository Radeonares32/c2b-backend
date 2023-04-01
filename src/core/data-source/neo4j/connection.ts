import Neode from 'neode'

export const neo4j = () => {
    try {
        const neo4j = new Neode("neo4j://localhost:9001", "neo4j", "passw0rd")
        return neo4j
    }
    catch(err) {
        console.error(err)
    }
}