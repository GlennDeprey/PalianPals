import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Join the Community',
    Svg: require('@site/static/img/undraw_community.svg').default, // replace with your Palia-related SVG
    description: (
      <>
        Connect with fellow Palia players, join discussions, 
        and make new friends in our welcoming community.
      </>
    ),
  },
  {
    title: 'Event Guides',
    Svg: require('@site/static/img/undraw_events.svg').default, // replace with your Palia-related SVG
    description: (
      <>
        Stay updated with upcoming events, learn how to participate, 
        and find tips to make the most of every in-game celebration.
      </>
    ),
  },
  {
    title: 'Game Tips & Tutorials',
    Svg: require('@site/static/img/undraw_tutorial.svg').default, // replace with your Palia-related SVG
    description: (
      <>
        Discover guides, tutorials, and helpful advice about Palia. 
        From gameplay mechanics to crafting and exploration, we’ve got you covered.
      </>
    ),
  },
];


function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
