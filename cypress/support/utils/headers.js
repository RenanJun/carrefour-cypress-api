export const getDefaultHeaders = (api_key, correlation_id) => ({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ` + Cypress.env('access_token'),
    'x-api-key': api_key,
    'x-correlation-id': correlation_id
});