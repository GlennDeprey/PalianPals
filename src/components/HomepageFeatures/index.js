import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Join the Community',
    Img: require('@site/static/img/home_join.png'),
    description: (
      <>
        Connect with fellow Palia players, join discussions, 
        and make new friends in our welcoming community.
      </>
    ),
  },
  {
    title: 'Event Guides',
    Img: require('@site/static/img/home_event.png'),
    description: (
      <>
        Stay updated with upcoming events, learn how to participate, 
        and find tips to make the most of every in-game celebration.
      </>
    ),
  },
  {
    title: 'Game Tips & Tutorials',
    Img: require('@site/static/img/home_guides.png'),
    description: (
      <>
        Discover guides, tutorials, and helpful advice about Palia. 
        From gameplay mechanics to crafting and exploration, we’ve got you covered.
      </>
    ),
  },
];

function Feature({ Img, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={Img} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}