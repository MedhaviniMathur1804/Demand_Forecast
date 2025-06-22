# Contributing to Demand Forecast Application

Thank you for your interest in contributing to this project! This document provides guidelines for contributing.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Python (v3.7 or higher)
- npm or yarn
- Git

### Setup
1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/demand_forecast_app.git
   cd demand_forecast_app
   ```
3. Install dependencies:
   ```bash
   # Backend
   cd backend
   npm install
   pip install -r requirements.txt
   
   # Frontend
   cd ../frontend
   npm install
   ```
4. Download the dataset (see `backend/DATASET_INSTRUCTIONS.md`)

## Development Workflow

### 1. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### 2. Make Your Changes
- Follow the existing code style
- Add comments for complex logic
- Update documentation if needed

### 3. Test Your Changes
```bash
# Test backend
cd backend
npm start

# Test frontend (in another terminal)
cd frontend
npm start
```

### 4. Commit Your Changes
```bash
git add .
git commit -m "feat: add your feature description"
```

### 5. Push and Create a Pull Request
```bash
git push origin feature/your-feature-name
```

## Code Style Guidelines

### JavaScript/React
- Use meaningful variable and function names
- Add JSDoc comments for functions
- Follow ESLint rules
- Use functional components with hooks

### Python
- Follow PEP 8 style guide
- Add docstrings for functions and classes
- Use type hints where appropriate

### General
- Keep functions small and focused
- Write clear commit messages
- Update README.md if adding new features

## Commit Message Format
Use conventional commits:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding tests
- `chore:` for maintenance tasks

## Pull Request Guidelines

1. **Title**: Clear and descriptive
2. **Description**: Explain what and why, not how
3. **Screenshots**: If UI changes are involved
4. **Tests**: Ensure all tests pass
5. **Documentation**: Update docs if needed

## Issues

### Reporting Bugs
- Use the bug report template
- Include steps to reproduce
- Add error messages and screenshots
- Specify your environment

### Feature Requests
- Use the feature request template
- Explain the use case
- Suggest implementation if possible

## Questions?

Feel free to open an issue for questions or discussions about the project.

## License

By contributing, you agree that your contributions will be licensed under the same license as the project. 