module.exports = {
  plugins: [require('daisyui')],
  theme: {
    extend: {
        'animation': {
            'gradient-x':'gradient-x 15s ease',
            'gradient-y':'gradient-y 15s ease',
            'gradient-xy':'gradient-xy 15s ease in out',
        },
        'keyframes': {
            'gradient-y': {
                '0%, 100%': {
                    'background-size':'100% 100%',
                    'background-position': 'center top'
                },
                '50%': {
                    'background-size':'200% 200%',
                    'background-position': 'center center'
                }
            },
            'gradient-x': {
                '0%, 100%': {
                    'background-size':'100% 100%',
                    'background-position': 'left center'
                },
                '50%': {
                    'background-size':'200% 200%',
                    'background-position': 'right center'
                }
            },
            'gradient-xy': {
                '0%, 100%': {
                    'background-size':'400% 400%',
                    'background-position': 'left center'
                },
                '50%': {
                    'background-size':'200% 200%',
                    'background-position': 'right center'
                }
            }
        }
    }
}

};
