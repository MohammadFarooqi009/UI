import { card } from '../assets';
import styles, {layout} from '../style';
import Button from './Button' 

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}> Find a better card deal <br className="sm:block hidden" /> in few easy steps</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Accept debit and credit cards with safe, secure, and convenient Payment Solutions from HooBank anywhere you do business online, in-store, and on-the-go. Visit our Developer Center to find Payments APIs, developer tools, and documentation.
      </p> 
         <Button styles="mt-10" />

    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]"/>
    </div>
  </section>
)
export default CardDeal