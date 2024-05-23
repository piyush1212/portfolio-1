const experiences = [
    {
        title: "Senior Frontend Engineer, Accessability",
        designation: "Serior Software Developer",
        timeline: "2024 - Present",
        description: "lorem20Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, velit cupiditate odit vitae modi cum consequatur asperiores omnis earum, ex ipsam nesciunt deleniti quae placeat non animi error quidem obcaecati quod eum, officia magnam sint! Incidunt iusto architecto error neque!",
        skills: ["HTML","CSS","Javascript","Java"],
    },

    {
        title: "Senior Frontend Engineer, Accessability",
        designation: "Serior Software Developer",
        timeline: "2024 - Present",
        description: "lorem20Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, velit cupiditate odit vitae modi cum consequatur asperiores omnis earum, ex ipsam nesciunt deleniti quae placeat non animi error quidem obcaecati quod eum, officia magnam sint! Incidunt iusto architecto error neque!",
        skills: ["HTML","CSS","Javascript","Java"],
    },

    {
        title: "Senior Frontend Engineer, Accessability",
        designation: "Serior Software Developer",
        timeline: "2024 - Present",
        description: "lorem20Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, velit cupiditate odit vitae modi cum consequatur asperiores omnis earum, ex ipsam nesciunt deleniti quae placeat non animi error quidem obcaecati quod eum, officia magnam sint! Incidunt iusto architecto error neque!",
        skills: ["HTML","CSS","Javascript","Java"],
    },
    
    {
        title: "Senior Frontend Engineer, Accessability",
        designation: "Serior Software Developer",
        timeline: "2024 - Present",
        description: "lorem20Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, velit cupiditate odit vitae modi cum consequatur asperiores omnis earum, ex ipsam nesciunt deleniti quae placeat non animi error quidem obcaecati quod eum, officia magnam sint! Incidunt iusto architecto error neque!",
        skills: ["HTML","CSS","Javascript","Java"],
    }
] 



export const Experiences = () => {
    return (
        <div>
            {
                experiences.map((experience) => {
                    return (
                        <div className="experience-card">
            <span>{experience.timeline}</span>
            <div className="right">
                <b>{experience.title}</b>
                <span className="designation">{experience.designation}</span>
                <p>{experience.description}</p>
                <div className="chips">
                    {experience.skills.map((skill, index) => {
                        return <span key={index} className="chip">{skill}</span>;
                    })}
                </div>
            </div>
        </div>
                    )
                })
            }
        </div>
    );
}