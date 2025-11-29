import { participantTemplate, successTemplate } from './templates.js';

let participantCount = 1;

document.getElementById('add').addEventListener('click', function() {
    participantCount++;
    console.log('Adding participant, count:', participantCount);
    const newParticipantHTML = participantTemplate(participantCount);
    console.log('Generated HTML:', newParticipantHTML);
    document.getElementById('add').insertAdjacentHTML('beforebegin', newParticipantHTML);
});

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    const total = feeElements.reduce((sum, feeElement) => {
        const feeValue = parseFloat(feeElement.value) || 0;
        return sum + feeValue;
    }, 0);
    return total;
}

function submitForm(event) {
    event.preventDefault();
    const adultName = document.getElementById('adult_name').value;
    const totalFeesAmount = totalFees();
    const info = {
        adultName: adultName,
        participantCount: participantCount,
        totalFees: totalFeesAmount
    };
    const summaryHTML = successTemplate(info);
    document.getElementById('summary').innerHTML = summaryHTML;
    document.querySelector('form').style.display = 'none';
}

document.getElementById('submitButton').addEventListener('click', submitForm);