import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const submiteFeedback = new SubmitFeedbackUseCase(
    {create: createFeedbackSpy},
    {sendMail:  sendMailSpy}
)


describe('Submit feedback', () => {
    
    it('should be able to submit a feedback', async () => {
        

        await expect(submiteFeedback.execute({
            type: 'BUG',
            comment: 'show do million',
            screenshot: 'data:image/png;base64,hioavhybivsnvubvsndv'
        })).resolves.not.toThrow()

        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()
    })
    it('should not be able to submit a feedback without type', async () => {
        

        await expect(submiteFeedback.execute({
            type: '',
            comment: 'show do million',
            screenshot: 'data:image/png;base64,hioavhybivsnvubvsndv'
        })).rejects.toThrow()
    })
    it('should not be able to submit a feedback without comment', async () => {
        

        await expect(submiteFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,hioavhybivsnvubvsndv'
        })).rejects.toThrow()
    })
    it('should not be able to submit a feedback with screenshot invalid', async () => {
        

        await expect(submiteFeedback.execute({
            type: 'BUG',
            comment: 'ta muito bugado',
            screenshot: 'test.jpg'
        })).rejects.toThrow()
    })
})
