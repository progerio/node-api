import chai from 'chai';
import chaiHttp from 'chai-http';
import 'chai/register-should';
import app from '../index';

chai.use(chaiHttp);

const { expect }  = chai;

describe('Testing the book enpoints:', () => {
    
    it('It should create a book', (done) => {
        const book = {
            title: 'First Awesome book',
            price: '$9.99',
            description: 'This is awesome book'
        };

        chai.request(app)
        .post('/api/v1/books')
        .set('Accept', 'application/json')
        .send(book)
        .end((err, res) => {
            expect(res.status).to.equal(201);
            expect(res.body.data).to.include({
                id: 1,
                title: book.title,
                price : book.price,
                description: book.description
            });
            done();
        });
    });
    
    
});