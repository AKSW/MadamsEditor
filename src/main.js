import MadamsEditor from './MadamsEditor'

const runMadamsEditor = (config) => {
    $(() => {
        new MadamsEditor(config)
    });
}

if (process.env === 'development') {
    runMadamsEditor()
}

export default runMadamsEditor