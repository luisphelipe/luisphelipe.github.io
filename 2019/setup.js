const options = {
  button: false,
  title: false,
  toolbar: false,
  tooltip: false,
  movable: false,
  scalable: false,
  transition: false,
  loading: false,
};

Viewer.setDefaults(options);

const galleries = [
  'native-agenda-gallery',
  'kanban-gallery',
  'mern-todo-gallery',
  'laravel-agenda-gallery',
  'draughts-gallery',
  'automata-gallery',
];

galleries.forEach(gallery => {
  new Viewer(document.getElementById(gallery));
});
