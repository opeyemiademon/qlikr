import React from 'react'
import { imagesUrl } from '../src/components/Includes'

const Interest=()=> {
  return (
    <section className="home intrest-home">
		<div className="mobile-area intrest-home-2">
			<div className="container">
				<div className="row">
					<div className="main-page">
						<div className="main-area intrest-area">
							<a href="startpage-1.html"><h1>Save your interests for<br/> better content & <br/>experience.</h1></a>
							<div className="pill-container">
								<div className="intrest-wrap">
									<input type="checkbox" id="option-a" name="selector" value="a" />
									<label className="selector option-a" htmlFor="option-a"> Lifestyle</label>
								</div>
								<div className="intrest-wrap">
									<input type="checkbox" id="option-b" name="selector" value="b" />
									<label className="selector" htmlFor="option-b">Travel</label>
								</div>
								<div className="intrest-wrap">
									<input type="checkbox" id="option-c" name="selector" value="c" />
									<label className="selector" htmlFor="option-c">Fitness</label> 
								</div>
								<div className="intrest-wrap">
									<input type="checkbox" id="option-d" name="selector" value="d" />
									<label  className="selector" htmlFor="option-d">Education</label> 
								</div>
								<div className="intrest-wrap">
									<input type="checkbox" id="option-e" name="selector" value="E" />
									<label className="selector" htmlFor="option-e">Technology</label> 
								</div>
								<div className="intrest-wrap">
									<input type="checkbox" id="option-f" name="selector" value="F" />
									<label className="selector" htmlFor="option-f">Politics	</label> 
								</div>
								<div className="intrest-wrap">
									<input type="checkbox" id="option-g" name="selector" value="G" />
									<label className="selector" htmlFor="option-g">Sports</label> 
								</div>
							</div>
							<div className="signup">									
								<a href="startpage-1.html" className="save-intrest" title="">Save Interests	</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Interest