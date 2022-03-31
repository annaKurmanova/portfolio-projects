import React from 'react'

function Project() {
    return (
        <div className="project-wrap">
            <div className="project-header">
                <img src="https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?cs=srgb&dl=pexels-matt-hardy-1533720.jpg&fm=jpg" alt="" />
                <div className="project-header-btns-wrap">
                    <div className="project-header-title">
                        <h3>Project Name</h3>
                        <p>Project subtitle</p>
                    </div>
                    <div className="project-header-btns">
                        <a href="#" className="project-header-btn">CodePen</a>
                        <a href="#" className="project-header-btn">GitHub</a>
                        <a href="#" className="project-header-btn">Email</a>
                    </div>
                </div>
            </div>
            <div className="project-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, sequi nobis, optio voluptatibus maxime sint nemo quisquam veniam harum vero esse cumque incidunt ipsum culpa aut ipsa, itaque deleniti aliquid?</p>
            </div>
        </div>
    )
}

export default Project