import { useEffect, useState } from "react"
import Card from "../../components/Card"
import styles from './Projetos.module.css'

function Projetos() {

    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        const buscarRepositorios = async () => {
            const response = await fetch('https://api.github.com/users/edsonmaia/repos')
            const data = await response.json()
            setRepositories(data)
        }
        buscarRepositorios()
    }, [])

    return (
        <section className={StyleSheet.projetos}>
            <h2>Projetos</h2>
            <section className={styles.lista}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
        </section>
    )
}

export default Projetos
