#! /usr/bin/env node
console.log('This is a cli ~')

const execSync = require('child_process').execSync;
// const readline = require('readline');

const commit_info = null
const process = async () => {
    const status = await execSync(`git status`, { encoding: 'utf-8' })
    console.log(status)
    const res = status.match(/^On branch (.+)\s/);
    console.log('=======CURRENT BRANCH======' + '\n' + res[1]);
	// keyboard input
	const commit = await execSync(`git commit -am '${commit_info || "-"}'`, { encoding: 'utf-8' })
	console.log(commit)
    const _pull = await execSync(`git pull origin ${res[1]}`, { encoding: 'utf-8' })
    console.log(_pull)
    const _push = await execSync(`git push`, { encoding: 'utf-8' })
    console.log(_push)

}
process().catch(err => console.log(err.toString()))




