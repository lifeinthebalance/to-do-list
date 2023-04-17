import { GoMarkGithub, GoMail } from 'react-icons/go';

const Footer = () => {
    return (
        <article className='fixed bottom-0 gap-[0.5rem] justify-center w-[100%] flex'>
        <a href='https://github.com/lifeinthebalance?tab=repositories' target='_blank' title='github' rel='noopener noreferrer'><GoMarkGithub size='28'/></a>
        <span className='hover:cursor-pointer' onClick={() => navigator.clipboard.writeText('sickl3im@gmail.com')} title='Gmail'>{<GoMail size='28'/>}</span>
    </article>
    )
}

export default Footer