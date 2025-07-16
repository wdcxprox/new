import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  SprayCanIcon, 
  HomeIcon, 
  WrenchScrewdriverIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  LeafIcon,
  ClockIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const floatingVariants = {
  float: {
    y: [-20, 20, -20],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Home: React.FC = () => {
  const services = [
    {
      icon: BuildingOfficeIcon,
      title: 'Gewerbliche Reinigung',
      description: 'Professionelle Reinigung für Bürogebäude, Industrieanlagen und Geschäftsflächen',
      features: ['Fassadenreinigung', 'Parkplatz- und Zufahrtsreinigung', 'Industrieanlagen-Reinigung']
    },
    {
      icon: HomeIcon,
      title: 'Private Reinigung',
      description: 'Zuverlässige Reinigungsservices für Ihr Zuhause und Ihre Außenbereiche',
      features: ['Terrassen- und Balkonreinigung', 'Garagenreinigung', 'Hausreinigung']
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'Spezialreinigung',
      description: 'Professionelle Lösungen für besondere Reinigungsanforderungen',
      features: ['Graffiti-Entfernung', 'Steinreinigung', 'Solaranlagen-Reinigung']
    }
  ];

  const features = [
    {
      icon: CheckCircleIcon,
      title: 'Erfahrung & Expertise',
      description: 'Jahrelange Erfahrung in der professionellen Oberflächenreinigung'
    },
    {
      icon: LeafIcon,
      title: 'Umweltfreundlich',
      description: 'Einsatz modernster, umweltschonender Reinigungsverfahren'
    },
    {
      icon: ClockIcon,
      title: 'Schnell & Zuverlässig',
      description: 'Pünktliche Termine und effiziente Arbeitsweise'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Versichert & Qualifiziert',
      description: 'Vollversichert und zertifizierte Reinigungsprofis'
    }
  ];

  const floatingCards = [
    { icon: SprayCanIcon, title: 'Hochdruckreinigung', delay: 0 },
    { icon: HomeIcon, title: 'Fassadenreinigung', delay: 2 },
    { icon: WrenchScrewdriverIcon, title: 'Fahrzeugreinigung', delay: 4 }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="hero-text">
              <motion.h1 
                className="hero-title"
                variants={itemVariants}
              >
                Professionelle Oberflächenreinigung
              </motion.h1>
              <motion.p 
                className="hero-subtitle"
                variants={itemVariants}
              >
                Für Gewerbe und Privat - Wir bringen Ihre Oberflächen zum Strahlen
              </motion.p>
              <motion.div 
                className="hero-buttons"
                variants={itemVariants}
              >
                <Link to="/kontakt" className="btn btn-primary">
                  Jetzt anfragen
                </Link>
                <Link to="/info" className="btn btn-secondary">
                  Mehr erfahren
                </Link>
              </motion.div>
            </div>

            <div className="hero-visual">
              {floatingCards.map((card, index) => (
                <motion.div
                  key={index}
                  className={`floating-card card-${index + 1}`}
                  variants={floatingVariants}
                  animate="float"
                  style={{ animationDelay: `${card.delay}s` }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotateY: 15, 
                    rotateX: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <card.icon className="card-icon" />
                  <h3>{card.title}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Unsere Leistungen
          </motion.h2>
          <motion.div 
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="service-icon">
                  <service.icon className="icon" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-content">
            <motion.div 
              className="features-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Warum BS Hydro Cleaning?</h2>
              <div className="feature-list">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="feature-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <feature.icon className="feature-icon" />
                    <div>
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="features-visual"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="rotating-cube"
                animate={{ 
                  rotateX: 360,
                  rotateY: 360 
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="cube-face front">💧</div>
                <div className="cube-face back">✨</div>
                <div className="cube-face right">🌊</div>
                <div className="cube-face left">🧽</div>
                <div className="cube-face top">⭐</div>
                <div className="cube-face bottom">🏆</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Bereit für strahlend saubere Oberflächen?</h2>
            <p>Kontaktieren Sie uns noch heute für ein kostenloses Angebot</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/kontakt" className="btn btn-primary">
                Kostenlos anfragen
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;