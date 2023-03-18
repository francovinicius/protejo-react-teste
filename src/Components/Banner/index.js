import styles from './Banner.css'

export default function Banner() {
    return (
        <section>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <img className="img-fluid" src="./assets/img/priscila-1.svg" alt="Priscila" />
                <h3>@PriscilaCruz</h3>
            </div>
        </section>
    )
}