import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import styles from './Contatos.module.css'
import { GoMail } from 'react-icons/go'
import { BsInstagram, BsYoutube, BsGithub, BsLinkedin } from 'react-icons/bs'

function Contatos() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.contatos}>
                    <h2>Contatos</h2>
                    <h3>Entre em contato</h3>
                    <p>Para que possamos conversar mais sobre.</p>

                    <div className={styles.icones}>

                        <a href='mailto:estevamjannuzzi@gmail.com' target='_blank' rel='noopener noreferrer'>
                            <GoMail className={styles.icone} />
                        </a>

                        <a href='https://www.instagram.com/estevam_jannuzzi/' target='_blank' rel='noopener noreferrer'>
                            <BsInstagram className={styles.icone} />
                        </a>
                        
                        <a href='https://www.youtube.com/@vfx_3D_world' target='_blank' rel='noopener noreferrer'>
                            <BsYoutube className={styles.icone} />
                        </a>
                        
                        <a href='https://github.com/EstevamJannuzzi' target='_blank' rel='noopener noreferrer'>
                            <BsGithub className={styles.icone} />
                        </a>
                        
                        <a href='https://www.linkedin.com/in/estevam-jannuzzi-217355bb/' target='_blank' rel='noopener noreferrer'>
                            <BsLinkedin className={styles.icone} />
                        </a>
                        
                    </div>

                </section>
            </Container>
            <Footer />
        </>
    )
}

export default Contatos
