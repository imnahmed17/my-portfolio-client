import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAddProjectMutation } from '../../../redux/features/project/projectApi';
import './AddProject.css';

const AddProject = () => {
    const [addProject, result ] = useAddProjectMutation();
    const [tags, setTags] = useState([]);

    const handleTags = (e) => {
        const value = e.target.value;
        const newTag = value.trim();
        
        if ((e.key === 'Enter' || e.key === 'Tab' || e.key === ',' || e.key === ' ') && newTag.length && !tags.includes(newTag)){
            e.preventDefault();

            setTags([...tags, newTag]);
            e.target.value = '';
        }
    };

    const removeTag = (index) => {
        setTags(tags.filter((el, i) => i !== index));
    };

    const checkKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const projectData = {
            title: form.title.value,
            category: form.category.value,
            gitLink: form.gitLink.value,
            liveLink: form.liveLink.value,
            imageUrl: form.imageUrl.value,
            tags: tags
        };

        addProject(projectData);

        if (result.status === 'rejected') {
            toast.error(result.error.message);
        } else {
            toast.success('Project added successfully!');
        }

        form.reset();
        setTags([]);
    };

    return (
        <div>
            <h2 className='section__title'>Add Project</h2>
            <span className='section__subtitle'>Insert your live projects</span>
            <div className='contact__container container grid'>
                <div className='contact__content'>
                    <form onSubmit={handleSubmit} onKeyDown={(e) => checkKeyDown(e)} className='contact__form'>
                        <div className='contact__form-grid'>
                            <div className='contact__form-div'>
                                <label className='contact__form-tag'>Project Title</label>
                                <input type='text' name='title' className='contact__form-input' placeholder='Enter your project title' required />
                            </div>
                            <div className='contact__form-div'>
                                <label className='contact__form-tag'>Project Category</label>
                                <select name='category' className='contact__form-input'>
                                    <option hidden>Pick One</option>
                                    <option value='Frontend'>Frontend</option>
                                    <option value='Full Stack'>Full Stack</option>
                                </select>
                            </div>
                            <div className='contact__form-div'>
                                <label className='contact__form-tag'>GitHub Link</label>
                                <input type='text' name='gitLink' className='contact__form-input' placeholder='Enter your project github link' required />
                            </div>
                            <div className='contact__form-div'>
                                <label className='contact__form-tag'>Live Link</label>
                                <input type='text' name='liveLink' className='contact__form-input' placeholder='Enter your project live link' required />
                            </div>
                        </div>
                        <div className='contact__form-div'>
                            <label className='contact__form-tag'>Image Url</label>
                            <input type='text' name='imageUrl' className='contact__form-input' placeholder='Enter your project image url' required />
                        </div>
                        <div className='tags__input__container'>
                            <label className='tags__input__title'>Tags</label>
                            {
                                tags.map((tag, index) =>(
                                    <div className='tag__item' key={index}>
                                        <span className='text'>{tag}</span>
                                        <span className='close' onClick={() => removeTag(index)}>&times;</span>
                                    </div>
                                ))
                            }
                            <input onKeyDown={handleTags} type='text' className='tags__input' placeholder='Enter tags' />
                        </div>
                        {/* <div className='contact__form-div contact__form-area'>
                            <label className='contact__form-tag'>Image Url</label>
                            <textarea name='imageUrl' cols='30' rows='10' className='contact__form-input' placeholder='Enter your project image url' required></textarea>
                        </div> */}
                        <button type='submit' className='button button--flex button--send'>
                            Upload
                            <svg
                                className="button__icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                                    fill="var(--container-color)"
                                ></path>
                                <path
                                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                                    fill="var(--container-color)"
                                ></path>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProject;