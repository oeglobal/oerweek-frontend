// Generate a new list with:
// Resource.objects.filter(post_status='publish', year__gte=2017).order_by('form_language').values_list('form_language', flat=True).distinct()
export default function getActiveLanguages() {
  return [
    'Arabic',
    'Burmese',
    'Croatian',
    'Dutch',
    'English',
    'Finnish',
    'French',
    'German',
    'Greek',
    'Japanese',
    'Mandarin',
    'Moldavian',
    'Polish',
    'Portuguese, Brazil',
    'Romanian',
    'Slovak',
    'Slovenian',
    'Spanish',
    'Ukrainian',
  ];
}
