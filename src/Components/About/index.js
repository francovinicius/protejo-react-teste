import styles from './About.css'
const lerMaisBtn = document.querySelector('.btn-ler-mais');
const aparecendoSobre = document.querySelector('.ler-mais');

export default function About() {
    return (
        <section>

            <div className='d-flex flex-column justify-content-center align-items-center'>

                <p className='p-apresentacao'>Olá mundo! Eu sou Vinicius Franco Duarte, Desenvolvedor Web, posso desenvolver sites responsivos a
                    partir do zero e transformá-los em experiências web modernas e fáceis de usar.
                </p>

                <button type="button" className="btn btn-light btn-sm btn-ler-mais" alt="Menu"><i>Ler Mais</i></button>

            </div>

            <div className="sobre-escondido d-flex align-items-center justify-content-around">
                <p className="p-apresentacao-txt ler-mais">
                    Antes de mergulhar de cabeça no desenvolvimento web, trabalhei em uma
                    empresa
                    onde era responsável pela manutenção dos laboratórios de informática, fui supervisor de operações, ocupei a
                    cadeira de professor de matemática e física em pré vestibulares, e realizei trabalhos voluntários que consistiam
                    no ensino da Matemática de uma forma mais lúdica para comunidades carentes e zona rural.
                    Foi um período de grande crescimento pessoal e profissional, onde adquiri aptidão para encarar situações de
                    extrema pressão. Tenho experiência com resolução de problemas e tomadas de decisão, em supervisionar, traçar
                    metas e estratégias em equipe, entre outras atividades.<br />
                    Já no âmbito da tecnologia, venho aprimorando meus conhecimentos em front-end, prezando sempre em entregar meus
                    projetos com design responsivo começando pelo mobile (Mobile First). Tenho conhecimentos em HTML5, CSS3,
                    JavaScript, e atualmente, tenho me aprofundando nos frameworks React e Bootstrap.
                </p>
            </div>

        </section>
    )
}

lerMaisBtn.addEventListener('click', () => {
    aparecendoSobre.classList.toggle('ler-mais-ativo');
    lerMaisBtn.classList.toggle('btn-ler-mais-inativo');
});