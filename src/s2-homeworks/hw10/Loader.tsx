import s from './Loader.module.css'
import preloader from '../../img/preloader.svg'


export const Loader = () => <div className={s.loader}>
    <img className={s.preloader} src={preloader} alt=""/>
</div>
