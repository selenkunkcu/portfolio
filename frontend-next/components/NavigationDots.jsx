import globalStyles from "../pages/index.module.scss"

const NavigationDots = ({ active }) => {
  return (
    <div className={globalStyles.app__navigation}>
        {["home", "about", "work", "skills", "contact"].map((item, index) => (
            <a 
                href={`#${item}`}
                key={item + index}
                className={globalStyles.app__navigation_dot}
                style={active === item ? {backgroundColor: '#313BAC'} : { }}
            />
     
        ))}
    </div>
  )
}

export default NavigationDots